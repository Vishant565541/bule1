from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # If a pixel is very close to white, make it transparent
    for item in datas:
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == '__main__':
    try:
        input_file = r"C:\Users\Yashvi Rupareliya\Downloads\Untitled design.png"
        output_file = r"C:\Users\Yashvi Rupareliya\.gemini\antigravity\scratch\blueneck-energy-next\public\logo-custom.png"
        remove_white_bg(input_file, output_file)
        print("Successfully removed white background")
    except Exception as e:
        print(f"Error: {e}")
