#Program a smart light
#Companay is named Plantiii, here iii stand for intelligence, intitutive, individual

import shutil
size = shutil.get_terminal_size().columns-1
seps = "-" * size
smart_light = "Sprouty"
emojicon = "•ᴗ•"

def working():
    print(seps)

    print(f"{smart_light} is active, kindly follow the instructions to connect me to the forest {emojicon}")
    

    print(seps)
working()