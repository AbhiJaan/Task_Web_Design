# // write program to track of the assets in the laptop,
# // assets can be mouse , keyboersd,
# // assets given to an employee to use,
# // asset will be transfer date to another to an employyee,
# // so we need to track the purchased date of the assets.
class Assets:
    def __init__(self,mouse,keyboard,batterycpu,usb,storage,ram,processor):
        self.__mouse=mouse
        self.__keyboard=keyboard
        self.__battery=battery
        self.__cpu=cpu
        self.__usb=usb
        self.__storage=storage
        self.__ram=ram
        self.__processor=processor

    def getmouse(self):
        return self.__mouse
    def getkeyboard(self):
        return self.__keyboard
    def getbattery(self):
        return self.__battery
    def getcpu(self):
        return self.__cpu
    def getusb(self):
        return self.__usb
    def getstorage(self):
        return self.__storage
    def getram(self):
        return self.__ram
    def getprocessor(self):
        return self.__processor


    def setmouse(self,mouse):
        self.__mouse=mouse
    def getkeyboard(self,keyboard):
        self.__keyboard=keyboard
    def setbattery(self):
        self.__battery=battery
    def setcpu(self):
        self.__cpu=cpu
    def setusb(self):
        self.__usbe=usb
    def setstorage(self):
        self.__storage=storage
    def setram(self):
        self.__ram=ram
    def setprocessor(self):
        self.__processor=processor


class Employee(Assets):
    def __init__(self,mouse,keyboard,battery,cpu,usb,storage,ram,processor,ename,id,salary,address,purchs_date):
        super().__init__(mouse=mouse,keyboard=keyboard,battery=battery,cpu=cpu,usb=usb,storag=storage,ram=ram,processor=processor)
        self.ename=ename
        self.id=id
        self.salary=salary
        self.purchs_date

    def employee_details(self):
        print("Name:{},Id:{},Salary{},address:{},purchased_date{}".format(self.ename,self.id,self.salary,self.addrese,self.purchs_date))
        
        












