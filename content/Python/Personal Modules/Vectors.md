```python

class Vector:
    def __init__(self,vlist):
        self.vlist=vlist.copy()
        self.n_dim=len(vlist)
        

    def __repr__(self):
        return str(self.vlist)

    def len(self):
        return len(self.vlist)
    
    def __getitem__(self,index):
        return self.vlist[index]
    
    def __setitem__(self, index, val):
        self.vlist[index] = val

    def copy(self):
        new=Vector(self.vlist)
        return new

    def check_dim(self,v2):
        if type(v2) != Vector:
            raise Exception("vector expected")                  
        if self.n_dim != v2.n_dim:
            raise Exception("v not same size")  

    def __eq__(self, v2):
        self.check_dim(v2)
        
        for i in range(self.len()):
            if self[i]!=v2[i]:
                return False
        return True
    
    def __add__(self,v2):
        self.check_dim(v2)
        new=[None for _ in range(self.len())]
        for i in range(self.len()):
            new[i]=self[i]+v2[i]

        vnew=Vector(new)
        return vnew
    
    def __sub__(self,v2):
        self.check_dim(v2)
        new=[None for _ in range(self.len())]
        for i in range(self.len()):
            new[i]=self[i]-v2[i]
        vnew=Vector(new)
        return vnew

    def __mul__(self,v2):
        if type(v2)==Vector:
            return self.dotP(v2)
        else:
            return self.scalar_mul(v2)
        
    def __div__(self,v2):
        if type(v2)==Vector:
            raise Exception("scalar div only")
        return self.scalar_div(v2)
    
    def scalar_mul(self,v2:float):
        new=[None for _ in range(self.len())]
        for i in range(self.len()):
            new[i]=self[i]*v2

        vnew=Vector(new)
        return vnew

    def scalar_div(self,v2:float):
        new=[None for _ in range(self.len())]
        for i in range(self.len()):
            new[i]=self[i]/v2

        vnew=Vector(new)
        return vnew


    def dotP(self,v2):
        """DOT PRODUCT"""
        self.check_dim(v2)
        new=[None for _ in range(self.len())]
        for i in range(self.len()):
            new[i]=self[i]*v2[i]
        return sum(new)

    def norm(self)->float:
        sqsum=0
        for v in self.vlist:
            sqsum+=v**2
        return sqsum**(0.5)
```