# EcoAppMeter - Power Consumption Calculator

![logo](https://raw.githubusercontent.com/biroue10/ecoapp/main/src/Capture%20d%E2%80%99%C3%A9cran%20du%202023-07-29%2001-06-26.png)

EcoAppMeter is a web application built with React that allows users to calculate the power consumption of different applications. By analyzing the power usage of applications and considering the carbon intensity of the country where the app is running, users can make informed decisions to reduce their environmental impact and optimize energy consumption.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

In today's world, energy efficiency and environmental consciousness are crucial. EcoAppMeter aims to empower users to understand the power consumption of their applications and encourage them to adopt more sustainable practices. With a user-friendly interface, anyone can quickly determine the power usage of their favorite applications and assess their impact on the environment.

## Features

- **Application Power Consumption Calculation**: Enter the details of your application, such as the name of the app, the number of CPUs, CPU power consumption, memory power consumption, the number of GPUs (if used), GPU power consumption, and the time the app is running.
- **Calculate Power Consumption**: After entering the application details, click the "Calculate" button to compute the total power consumption using the formula:
  
  ```
  Total Power Consumption = (Number of CPUs * CPU Power Consumption) + Memory Power Consumption + (Number of GPUs * GPU Power Consumption) / 1000
  ```
  
- **Carbon Intensity Consideration**: EcoAppMeter will also ask the user to enter the ISO code (in capital letters) of the country where the app is running. It will use a Electricity Maps API to fetch the carbon intensity of that country. The app will then multiply the power consumption by the carbon intensity before rendering the result.
- **Display Results**: React will render the name of the application along with the adjusted power consumption considering the carbon intensity and the time the app consumes the power in hours.

## Getting Started

Follow these instructions to set up EcoAppMeter on your local machine.

### Prerequisites

Before installing EcoAppMeter, ensure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/biroue10/ecoapp.git
cd ecoapp
```

2. Install the dependencies:

```bash
npm install
```

## How to Use

To start the development server and use EcoAppMeter, run the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your web browser.

Follow the on-screen instructions to enter the application's details, including the name, CPU, GPU, and memory information, the time the app is running, and the ISO code of the country where the app is running. After clicking the "Calculate" button, EcoAppMeter will consider the carbon intensity of the country and adjust the power consumption accordingly before displaying the result.

## Contributing

We welcome contributions from the community! If you wish to contribute to EcoAppMeter, please follow our guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

- Hat tip to anyone whose code or libraries are used.
- Thanks to the React community for creating such an excellent framework.
- Special thanks to our contributors for their valuable input and efforts.
```
