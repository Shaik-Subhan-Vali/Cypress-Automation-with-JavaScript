class Floor:
    def __init__(self, width, length):

        self.width = max(0, width)
        self.length = max(0, length)
    
 
    def get_area(self):
        return self.width * self.length


class Carpet:
    def __init__(self, cost):
 
        self.cost = max(0, cost)
    

    def get_cost(self):
        return self.cost


class Calculator:
    def __init__(self, floor, carpet):
        self.floor = floor
        self.carpet = carpet
    
  
    def get_total_cost(self):
      
        return self.floor.get_area() * self.carpet.get_cost()


carpet1 = Carpet(3.5)
floor1 = Floor(2.75, 4.0)
calculator1 = Calculator(floor1, carpet1)
print("total= ", calculator1.get_total_cost()) 

carpet2 = Carpet(1.5)
floor2 = Floor(5.4, 4.5)
calculator2 = Calculator(floor2, carpet2)
print("total= ", calculator2.get_total_cost())  
