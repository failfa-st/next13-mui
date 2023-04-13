Feature: Page title adjustment

  As a User,
  I want the page title to display 'Welcome',
  so that I feel welcomed on the website

  Background:
    Given I am on the website

  Scenario: The page title should display 'Welcome' when the user visits the website
    When I visit any page on the website
    Then the page title should display 'Welcome'

  Scenario: The title change should be applied to all pages on the website
    When I navigate to different pages on the website
    Then the page title should display 'Welcome' on each page
