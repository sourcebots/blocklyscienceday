import socket
import json
import time
import math

class FamilyDayBot:
    def __init__(self):
        self.turn_left_time = 1.45
        self.turn_right_time = 1.45
        self.correct_threshold = 100
        self.min_correct_amount = 0.15
        self.max_speed = 2
        self.power_serial = "sr0GV2Y"
        self.motor_serial = "0GK1A"
        self.motor_socket = socket.socket(socket.AF_UNIX, socket.SOCK_SEQPACKET)
        self.power_socket = socket.socket(socket.AF_UNIX, socket.SOCK_SEQPACKET)
        self.vision_socket = socket.socket(socket.AF_UNIX, socket.SOCK_SEQPACKET)
        self.motor_socket.connect("/var/robotd/motor/{}".format(self.motor_serial))
        self.power_socket.connect("/var/robotd/power/{}".format(self.power_serial))
        self.vision_socket.connect("/var/robotd/camera/video0")
        self.power_socket.send(json.dumps({"power": True}).encode('utf-8'))

    def _move(self, left, right, amount):
        self.motor_socket.send(json.dumps({"left": left, "right": right}).encode("utf-8"))
        time.sleep(amount / self.max_speed)
        self.motor_socket.send(json.dumps({"left": 0, "right": 0}).encode("utf-8"))

    def turn_left(self):
        self._move(-0.3, -0.3, self.turn_left_time)

    def turn_right(self):
        self._move(0.3, 0.3, self.turn_right_time)

    def go_backward(self, count):
            self._move(-0.3, 0.3, count*2.8)

    def go_forward(self, count):
            self._move(0.3, -0.3, count*2.8)

    def go_to_marker(self, marker_no):
        done = False
        failcount = 0
        while not done:
            self.vision_socket.send(b'{}')
            self.vision_socket.setblocking(False)
            vision_data = None
            try:
                while True:
                    vision_data = json.loads(self.vision_socket.recv(2048).decode("utf-8"))
            except:
                pass
            if vision_data:
                vision_data = json.loads(vision_data)
            else:
                vision_data = []
            token = None
            for marker in vision_data:
                if marker["id"] == marker_no:
                    token = marker
            if token:
                failcount = 0
                offset = token['pixel_centre'][0] - (1280 / 2)
                if abs(offset) > self.correct_threshold:
                    if offset < 0:
                        bot._move(-0.2, -0.2, (self.turn_left_time / 3) * (-offset / (1280 / 2)) + self.min_correct_amount)
                    if offset > 0:
                        bot._move(0.2, 0.2, (self.turn_right_time / 3) * (offset / (1280 / 2)) + self.min_correct_amount)
                else:
                    # Correct angle, move distance
                    if token["distance"] > 1:
                        self.go_fowards(1)
                    elif token["distance"] > 0.5:
                        self.go_fowards(0.5)
                    else:
                        done = True
                        print("done!")
                        return
                time.sleep(2)
            else:
                if failcount > 3:
                    print("Losing...",failcount)
                    return
                else:
                    failcount += 1
                    time.sleep(2)



bot = FamilyDayBot()
time.sleep(2)
