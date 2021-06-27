class Sample:
    def __init__(self,x,y):
        self.x=x
        self.y=y
       
class sample2(Sample):
    def __init__(self,p,q):
        super().__init__(self,p,q)
        self.p=p
        self.q=q

class sample3(Sample):
    def __init__(self,x,y,p,q):
        super().__init__(x=x,y=y)
        self.p=p
        self.q=q

s1=sample2(p=100,q=200)
print("x vlaue:",s1.x)
print("y value:",s1.y)
print("p value:",s1.p)
print("q value:",s1.q)








