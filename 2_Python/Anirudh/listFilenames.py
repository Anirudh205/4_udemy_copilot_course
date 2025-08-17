import os

def list_filenames(directory):
    try:
        filenames = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        return filenames
    except Exception as e:
        print(f"Error: {e}")
        return []

# Example usage:
if __name__ == "__main__":
    directory = "G:\\Sikkim Photos\\sorted"  # current directory
    files = list_filenames(directory)
    print(len(files), "files found:")
    for file in files:
        print(file)