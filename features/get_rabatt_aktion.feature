Feature: Rabatt Aktionen
    Scenario: Get Rabatt Aktion
        We can ask wheter we have a Rabatt Aktion.
        
        Given we do not have a Rabatt Aktion
        When we ask if we have a Rabatt Aktion
        Then we are told "no"