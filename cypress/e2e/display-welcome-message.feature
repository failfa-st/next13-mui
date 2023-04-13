Feature: Display welcome message

  As a User,
  I want to see a welcome message when I open the application,
  so that I feel welcomed and informed about the app's purpose.

  Background:
    Given the application is opened

  Scenario: The welcome message is displayed when the application is opened
    Then the welcome message is displayed

  Scenario: The welcome message contains a brief description of the app's purpose
    Then the welcome message contains a brief description of the app's purpose

  Scenario: The welcome message is clear and easy to read
    Then the welcome message is clear and easy to read
