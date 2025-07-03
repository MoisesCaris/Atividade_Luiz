*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    file:///C:/Users/MoisesCaris/Documents/Nova%20pasta/index.html

*** Test Cases ***
Adicionar Usuário e Verificar na Tabela
    [Documentation]    Testa adicionar um usuário e verifica se ele aparece na tabela.
    Open Browser    ${URL}    chrome
    Maximize Browser Window
    Sleep    1
    Input Text    id:userName    João
    Input Text    id:userEmail   joao@email.com
    Click Button  xpath=//button[contains(., 'Adicionar Usuário')]
    Sleep    1
    ${nome}=    Get Text    xpath=//tbody[@id='usersTable']/tr[1]/td[1]
    ${email}=   Get Text    xpath=//tbody[@id='usersTable']/tr[1]/td[2]
    Should Be Equal    ${nome}    João
    Should Be Equal    ${email}   joao@email.com
    [Teardown]    Close Browser

Adicionar Produto e Verificar na Tabela
    [Documentation]    Testa adicionar um produto e verifica se ele aparece na tabela.
    Open Browser    ${URL}    chrome
    Maximize Browser Window
    Sleep    1
    Input Text    id:productName    Cadeira
    Input Text    id:productPrice   150.5
    Click Button  xpath=//button[contains(., 'Adicionar Produto')]
    Sleep    1
    ${nome}=    Get Text    xpath=//tbody[@id='productsTable']/tr[1]/td[1]
    ${preco}=   Get Text    xpath=//tbody[@id='productsTable']/tr[1]/td[2]
    Should Be Equal    ${nome}    Cadeira
    Should Contain     ${preco}   150.50
    [Teardown]    Close Browser
