Feature: Rabatt Aktionen
    Scenario: Display Rabatt Aktionen

    Given we are on "http://localhost:3000/no-rabattangebote"
    When we do not have a Rabatt Aktion
    Then the websites states "Currently, we don't have any Rabatt Aktionen"

    Given we are on "http://localhost:3000/rabattangebote"
    When we have Rabattangebote
    Then there is a list
