import matplotlib.pyplot as plt
import numpy as np

def initial_plot():
    plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
    plt.show()

def plot_cosine_wave():
    x = np.linspace(0, 10, 100)
    y = np.cos(x)
    plt.plot(x, y)
    plt.title('Cosine Wave')
    plt.xlabel('Angle [radians]')
    plt.ylabel('cos(x)')
    plt.grid(True)
    plt.show()

def plot_cosinus_and_sine_wave():
    x = np.linspace(0, 10, 100)
    y_cos = np.cos(x)
    y_sin = np.sin(x)
    
    plt.plot(x, y_cos, label='Cosine Wave')
    plt.plot(x, y_sin, label='Sine Wave', linestyle='--')
    plt.title('Cosine and Sine Waves')
    plt.xlabel('Angle [radians]')
    plt.ylabel('Value')
    plt.legend()
    plt.grid(True)
    plt.show()

def plot_world_population():
    years = np.array([1960, 1970, 1980, 1990, 2000, 2010, 2020])
    population = np.array([3.039, 3.692, 4.434, 5.321, 6.127, 6.972, 7.794]) * 1e9
    
    plt.plot(years, population)
    plt.title('World Population Over Time')
    plt.xlabel('Year')
    plt.ylabel('Population (in billions)')
    plt.grid(True)
    plt.show()   

def plot_programming_languages_usage():
    languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'PHP', 'R']
    usage = [29.9, 19.1, 16.2, 8.2, 6.7, 5.8, 4.2]  # Example usage percentages

    plt.figure(figsize=(8, 8))
    plt.pie(usage, labels=languages, autopct='%1.1f%%', startangle=140)
    plt.title('Most Popular Programming Languages Usage')
    plt.axis('equal')
    plt.show()

plot_programming_languages_usage()