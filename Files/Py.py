import os

def main():
    pc_user = os.getenv("USERNAME") or os.getenv("USER") or "Unknown User"
    message = (f"Do not trust random PowerShell commands, and if you do, re-install Windows. "
               f"I could've done anything here—deleted your files and other things. "
               f"Please don't trust anything you put in the terminal, {pc_user}.")
    print(message)
    input("\nPress Enter to exit...")

if __name__ == "__main__":
    main()
