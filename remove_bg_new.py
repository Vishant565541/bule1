from PIL import Image

def process_img(input_path, output_path, tolerance=235):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # get bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

if __name__ == '__main__':
    try:
        input_file = r"C:\Users\senta\OneDrive\Documents\Desktop\Blue\blueneck-energy-next\public\main-logo.jpeg"
        output_file = r"C:\Users\senta\OneDrive\Documents\Desktop\Blue\blueneck-energy-next\public\main-logo-transparent.png"
        process_img(input_file, output_file)
        print("Successfully removed white background and cropped")
    except Exception as e:
        print(f"Error: {e}")
