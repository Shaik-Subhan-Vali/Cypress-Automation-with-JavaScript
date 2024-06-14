class Wall:
    def __init__(self, width=0.0, height=0.0):
        self.width = max(0.0, width)
        self.height = max(0.0, height)

    def get_width(self):
        return self.width

    def get_height(self):
        return self.height

    def set_width(self, width):
        self.width = max(0.0, width)

    def set_height(self, height):
        self.height = max(0.0, height)

    def get_area(self):
        return self.width * self.height


wall = Wall(5, 4)
print("area= ", wall.get_area())
wall.set_height(-1.5)
print("width= ", wall.get_width())
print("height= ", wall.get_height())
print("area= ", wall.get_area())
