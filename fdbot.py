import socket
import json
import time


class FamilyDayBot:
    def __init__(self):
        self.turn_time = 3
        self.max_speed = 2
        self.power_serial = "SR0GV2Y"
        self.motor_serial = "SR0GK1A"
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
        self._move(0.3, 0.3, self.turn_time)

    def turn_right(self):
        self._move(-0.3, -0.3, self.turn_time)

    def go_backwards(self, count):
        self._move(0.3, -0.3, count)

    def go_fowards(self, count):
        self._move(-0.3, 0.3, count)

    def go_to_marker(self, marker_no):
        vision_data = json.load(self.vision_socket.recv(2048).decode("utf-8"))
        token = dict()
        for marker in vision_data:
            if marker["id"] == marker_no and token == {}:
                token = marker
        if token != {}:
            # TODO: Adjustment code
            self.go_fowards(int(token["distance"]))
        else:
            self.motor_socket.send(json.dumps({"beep": True}).encode("utf-8"))

    def __del__(self):
        self.power_socket.send(json.dumps({"power": False}).encode("utf-8"))
        self.power_socket.close()
        self.motor_socket.close()
        self.vision_socket.close()


bot = FamilyDayBot()
