# Calculator Project

<img src="https://github.com/user-attachments/assets/075cfd91-64ef-475e-b2ed-271eb9ac00e2" alt="Blue Gradient Modern Youtube Intro" width="600px" height="300px">




This project is a simple web-based calculator built using HTML, CSS, JavaScript, and Bootstrap. The project leverages Django's static template tags to include external CSS and JavaScript files.

## Features

- **Responsive Design**: Utilizes Bootstrap for a responsive and visually appealing interface.
- **Basic Operations**: Supports basic arithmetic operations like addition, subtraction, multiplication, and division.
- **Special Functions**: Includes functionalities for clearing the screen (AC), deleting the last entry (CE), and calculating percentages (%).
- **Real-Time Calculations**: Provides immediate feedback and results as users input numbers and operations.

## Technologies Used

- **HTML**: For the structure of the calculator.
- **CSS**: For custom styling.
- **Bootstrap**: For responsive design and additional styling.
- **JavaScript**: For the calculator's functionality and user interaction.
- **Django**: For template rendering and static file management.

## File Structure

- `index.html`: Main HTML file that contains the calculator's structure.
- `style.css`: Custom CSS file for additional styling (referenced via Django's static template tag).
- `scripts.js`: JavaScript file containing the logic for the calculator (referenced via Django's static template tag).

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sreenathkk00/calculator-project.git
2. **Navigate to the project directory**:
   ```bash
   cd calculator-project
3. **Ensure you have Django installed. If not, install it using pip**:
   ```bash
   pip install django
4. **Run the Django server**:
   ```bash
     python manage.py runserver
5. **Open your browser and navigate to**:
    ```bash
      http://127.0.0.1:8000/



## Usage

- **Input numbers and operations**: Click the buttons to input numbers and arithmetic operations.
- **Clear screen (AC)**: Clears all input.
- **Delete last entry (CE)**: Deletes the last entered character.
- **Calculate result (=)**: Displays the result of the entered arithmetic expression.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss potential changes or enhancements.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Bootstrap team for providing a responsive and easy-to-use CSS framework.
- Special thanks to the Django community for their excellent documentation and support.

