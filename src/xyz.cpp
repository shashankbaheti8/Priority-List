#include <iostream>
#include <cmath>

// Function to calculate the number of persons required
double calculatePersonsRequired(double KLOC) {
    std::string mode;
    double a, b, c, d;

    // Determine the project mode based on KLOC range
    if (KLOC >= 1 && KLOC <= 100) {
        mode = "Organic";
        a = 2.4;
        b = 1.05;
    } else if (KLOC > 100 && KLOC <= 500) {
        mode = "Semi-Detached";
        a = 3.0;
        b = 1.12;
    } else {
        mode = "Embedded";
        a = 3.6;
        b = 1.20;
    }

    // Input the project schedule duration in months
    double duration;
    std::cout << "Enter project duration (in months): ";
    std::cin >> duration;

    // Calculate effort (E)
    double E = a * pow(KLOC, b);

    // Calculate the number of persons required (N)
    double N = E / duration;

    return N;
}

int main() {
    double KLOC;

    // Input the size of the software project in KLOC
    std::cout << "Enter KLOC: ";
    std::cin >> KLOC;

    // Calculate the number of persons required
    double personsRequired = calculatePersonsRequired(KLOC);

    // Output the result
    std::cout << "Number of Persons Required: " << personsRequired << std::endl;

    return 0;
}
