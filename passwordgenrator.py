import random
import string

def generate_password(length=12, use_digits=True, use_special_chars=True):
    characters = string.ascii_letters  # Includes uppercase and lowercase letters

    if use_digits:
        characters += string.digits  # Include digits (0-9)

    if use_special_chars:
        characters += string.punctuation  # Includes special characters like !@#$%^&*()

    password = ''.join(random.choice(characters) for _ in range(length))
    return password
