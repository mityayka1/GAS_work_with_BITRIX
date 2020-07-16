/** EXAMPLE 
 * 1. set out webhook by lead added 
 * 2. public your script as webApp, and set url of webApp in Bitrix out webhook
 * 3. set inbound webhook in Bitrix, get auth key from UI and owner ID (in example url) and put them in webHookOption
*/

function doPost(e) {

    const webHookOptions = {
        authCod: 'xxxxxxxxxxxxxxx', //see special security cod from bitrix, in webhooks interface
        webHookOwnerId: '1', //id of user, which set webhook
    }

    let Bitrix = new BitrixMain()
    Bitrix.setBitrixOptions(e, webHookOptions);

    let row = Bitrix.getDeal().getParamsRow('ID', 'DATE_CREATE', 'UF_CRM_1583254123774');
    
    let SS = SpreadsheetApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    let sheet = SS.getSheets()[0];

    sheet.getRange(sheet.getLastRow() + 1, 1, row.length, row[0].length).setValues(row)

}
