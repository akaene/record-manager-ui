/**
 * Czech localization.
 */

import * as Constants from "../constants/DefaultConstants";

export default {
    'locale': 'cs',

    'messages': {
        'add': 'Přidat',
        'back': 'Zpět',
        'cancel': 'Zrušit',
        'open': 'Otevřít',
        'close': 'Zavřít',
        'cancel-tooltip': 'Zrušit a zahodit změny',
        'save': 'Uložit',
        'save-and-send-email': 'Uložit a poslat email',
        'saving': 'Ukládám...',
        'delete': 'Smazat',
        'headline': 'Název',
        'name': 'Název',
        'summary': 'Shrnutí',
        'narrative': 'Popis',
        'table-actions': 'Akce',
        'table-edit': 'Editovat',
        'author': 'Autor',
        'description': 'Popis',
        'select.default': '--- Vybrat ---',
        'yes': 'Ano',
        'no': 'Ne',
        'unknown': 'Neznámé',
        'please-wait': 'Prosím, čekejte...',
        'actions': 'Akce',
        'required': 'Políčka označená * jsou povinná',
        'reject': 'Odmítnout',
        'complete': 'Dokončit',
        'publish': 'Publikovat',
        'select.placeholder': 'Vyberte...',

        'login.title': Constants.APP_NAME + ' - Přihlášení',
        'login.username': 'Uživatelské jméno',
        'login.password': 'Heslo',
        'login.submit': 'Přihlásit',
        'login.register': 'Registrace',
        'login.error': 'Přihlášení se nezdařilo.',
        'login.progress-mask': 'Přihlašuji...',
        'login.forgot-password': 'Zapomenuté heslo',
        'login.email': 'Email',
        'login.reset-password': 'Resetovat heslo',
        'login.forgot-your-password': 'Zapomněl jsi své heslo?',
        'login.back-to-login': 'Zpět na přihlášení',
        'login.reset-password-success': 'Odkaz na obnovení hesla byl odeslán na zadaný e-mail.',
        'login.reset-password-error': 'Resetování hesla se nezdařilo. Pokud je zadaný e-mail správný, kontaktujte administrátora.',
        'login.token-password-success': 'Heslo bylo nastaveno.',

        'main.users-nav': 'Uživatelé',
        'main.institutions-nav': 'Instituce',
        'main.institution-nav': 'Moje instituce',
        'main.records-nav': 'Záznamy',
        'main.logout': 'Odhlásit se',
        'main.my-profile': 'Můj profil',
        'main.history': 'Historie',
        'main.impersonating': 'Přihlášen jako',

        'dashboard.welcome': 'Dobrý den, {name}, vítejte v ' + Constants.APP_NAME + '.',
        'dashboard.create-tile': 'Vytvořit záznam',
        'dashboard.user-tile': 'Můj profil',
        'dashboard.users-tile': 'Uživatelé',
        'dashboard.institution-tile': 'Instituce',
        'dashboard.institutions-tile': 'Instituce',
        'dashboard.records-tile': 'Záznamy',
        'dashboard.statistics-tile': 'Statistika',

        'notfound.title': 'Nenalezeno',
        'notfound.msg-with-id': 'Záznam \'{resource}\' s identifikátorem {identifier} nenalezen.',
        'notfound.msg': 'Záznam \'{resource}\' nenalezen.',

        'users.panel-title': 'Uživatelé',
        'users.create-user': 'Přidat uživatele',
        'users.email': 'Email',
        'users.open-tooltip': 'Zobrazit či upravit detaily o tomto uživateli',
        'users.delete-tooltip': 'Smazat tohoto uživatele',
        'users.add-new-user': 'Přidat nového uživatele',
        'users.back-to-institution': 'Zpět do instituce',
        'users.not-found': 'Žádný uživatel nebyl nalezen...',
        'users.loading-error': 'Uživatele se nepodařilo načíst. {error}',

        'delete.dialog-title': 'Smazat položku?',
        'delete.dialog-content': 'Určitě chcete odstranit {itemLabel}?',

        'user.panel-title': 'Uživatel',
        'user.first-name': 'Jméno',
        'user.last-name': 'Příjmení',
        'user.username': 'Uživatelské jméno',
        'user.password': 'Heslo',
        'user.password-confirm': 'Potvrzení hesla',
        'user.passwords-not-matching-tooltip': 'Hesla se neshodují',
        'user.role': 'Role',
        'user.save-success': 'Uživatel úspěšně uložen',
        'user.save-success-with-email': 'Uživatel úspěšně uložen a informován emailem.',
        'user.save-error': 'Uživatele se nepodařilo uložit. {error}',
        'user.delete-success': 'Uživatel úspěšně odstraněn',
        'user.delete-error': 'Uživatele se nepodařilo smazat. {error}',
        'user.load-error': 'Uživatele se nepodařilo načíst. {error}',
        'user.password-change': 'Změnit heslo',
        'user.password-current': 'Staré heslo',
        'user.password-new': 'Nové heslo',
        'user.password-change-success': 'Heslo úspěšně změněno',
        'user.password-change-success-with-email': 'Heslo úspěšně změneno a uživatel byl informován emailem.',
        'user.password-change-error': 'Heslo se nepodařilo změnit. {error}',
        'user.password-non-valid': 'Nové a potvrzovací hesla se musí shodovat a musí být alespoň 4 znaky dlouhá.',
        'user.send-invitation-success': 'Uživatel úspěšně pozván do studie',
        'user.send-invitation-error': 'Uživatele se nepodařilo pozvat do studie. {error}',
        'user.invite-to-study-text': 'Uživatel zatím nebyl pozván do studie. ',
        'user.invite-to-study': 'Poslat pozvánku nyní',
        'user.delete-invitation-option': 'Smazat možnost pozvání',
        'user.delete-invitation-option-success': 'Možnost pozvání uživatele do studie byla odstraněna.',
        'user.delete-invitation-option-error': 'Nepodařilo se smazat možnost pozvání uživatele do studie. {error}',
        'user.impersonate': 'Impersonace',
        'user.impersonate-error': 'Impersonace se nepodařila. {error}',
        'user.edit': 'Upravit profil',

        'institutions.panel-title': 'Instituce',
        'institutions.create-institution': 'Vytvořit instituci',
        'institutions.open-tooltip': 'Zobrazit či upravit detaily o této instituci',
        'institutions.delete-tooltip': 'Smazat tuto instituci',
        'institutions.not-found': 'Žádná instituce nebyla nalezen...',
        'institutions.loading-error': 'Instituce se nepodařilo načíst. {error}',

        'institution.panel-title': 'Instituce',
        'institution.name': 'Název instituce',
        'institution.email': 'Kontaktní email',
        'institution.created': 'Instituce zaregistrována {date}',
        'institution.members.panel-title': 'Zaměstnanci instituce',
        'institution.patients.panel-title': 'Záznamy instituce',
        'institution.save-success': 'Instituce úspěšně uložena.',
        'institution.save-error': 'Instituci se nepodařilo uložit. {error}',
        'institution.delete-success': 'Instituce úspěšně odstraněna',
        'institution.delete-error': 'Instituci se nepodařilo smazat. {error}',
        'institution.load-error': 'Instituci se nepodařilo načíst. {error}',
        'institution.members.not-found': 'Nebyli nalezeni žádní členové instituce...',
        'institution.members.loading-error': 'Nelze načíst členy instituce. {error}',

        'records.panel-title': 'Záznamy',
        'records.id': 'Id',
        'records.form-template': 'Šablona',
        'records.local-name': 'Název',
        'records.completion-status': 'Stav',
        'records.completion-status.open': 'Rozpracovaný',
        'records.completion-status.valid': 'Validní',
        'records.completion-status.completed': 'Uzavřený',
        'records.completion-status.published': 'Publikovaný',
        'records.completion-status.rejected': 'Odmítnutý',
        'records.completion-status-tooltip.complete': 'Všechny povinné informace ze záznamu byly vyplněny.',
        'records.completion-status-tooltip.incomplete': 'Některé povinné informace ze záznamu ještě nebyly vyplněny.',
        'records.completion-status-tooltip.rejected': 'Formulář byl odmítnut',
        'records.completion-status-tooltip.published': 'Formulář byl zveřejněn',
        'records.last-modified': 'Naposledy upraveno',
        'records.open-tooltip': 'Zobrazit či upravit tento záznam',
        'records.delete-tooltip': 'Smazat tento záznam',
        'records.not-found': 'Žádný záznam nebyl nalezen...',
        'records.loading-error': 'Záznam se nepodařilo načíst. {error}',
        'records.create-tile': 'Vytvořit',
        'records.opened-study.create-tooltip': 'Vytvořit nový záznam',
        'records.closed-study.create-tooltip': 'Studie je uzavřená na přidávání pacientů. Prosím, kontaktujte studijního koordinátora v připadě, že potřebujete přidat nový záznam pacienta.',
        'records.export': 'Export',
        'records.export.excel': 'Export do MS Excel',
        'records.export.json': 'Export do JSON',
        'records.import': 'Import',
        'records.import.dialog.title': 'Import záznamů',
        'records.import.dropzone.label': 'Přetáhněte sem soubor myší, nebo klikněte pro výběr pomocí dialogu',
        'records.import.partialSuccess.message': '{importedCount, plural, one {Importován #} few {Importovány #} other {Importováno #}} z {totalCount, plural, one {# záznamu} other {# záznamů}}. Detaily naleznete v logu serveru.',
        'records.import.success.message': 'Úspěšně {importedCount, plural, one {importován # záznam} few {importovány všechny # záznamy} other {importováno všech # záznamů}}.',
        'records.import.error.message': 'Import záznamů byl neúspěšný. Více informací najdete v logu serveru.',

        'record.panel-title': 'Záznam {identifier}',
        'record.form-title': 'Detail',
        'record.institution': 'Záznam vyplněn v',
        'record.created-by-msg': 'Vytvořil(a) {name} {date}.',
        'record.last-edited-msg': 'Naposledy upravil(a) {name} {date}.',
        'record.save-success': 'Záznam úspěšně uložen.',
        'record.save-error': 'Záznam se nepodařilo uložit. {error}',
        'record.form.please-wait': 'Nahrávám formulář, prosím, čekejte...',
        'record.delete-success': 'Záznam úspěšně odstraněn',
        'record.delete-error': 'Záznam se nepodařilo smazat. {error}',
        'record.load-error': 'Záznam se nepodařilo načíst. {error}',
        'record.load-form-error': 'Formulář se nepodařilo načíst. {error}',

        'help.local-name': 'Účelem tohoto atributu je pomoci vám identifikovat vyplněný záznam. Můžete použít např. číslování záznam ("záznam_1", "záznam_2").',

        'wizard.previous': 'Zpět',
        'wizard.next': 'Další',
        'wizard.finish': 'Dokončit',

        'history.action-type': 'Typ akce',
        'history.author': 'Autor',
        'history.action': 'Akce',
        'history.reset': 'Reset',
        'history.previous': 'Předchozí',
        'history.next': 'Další',
        'history.time': 'Čas',
        'history.open-tooltip': 'Otevřít detaily této akce',
        'history.panel-title': 'Historie akcí',
        'history.load-error': 'Nepodařilo se načíst akci historie. {error}',
        'history.payload': 'Obsah',
        'history.search': 'Vyhledat',
        'history.loading-error': 'Nepodařilo se načíst akce historie. {error}',
        'history.not-found': 'Žádné akce nebyly nalezeny..',
        'history.non-logged': 'Nepřihlášený uživatel',

        'statistics.panel-title': 'Statistika',
        'statistics.number-of-investigators': 'Počet úředníků',
        'statistics.number-of-processed-records': 'Počet vyplněných záznamů',
        'statistics.loading-error': 'Nepodařilo se načíst statistiky. {error}',

        'table.sort.tooltip': 'Seřadit záznamy dle tohoto sloupce',

        'filters': 'Filtry',
        'filters.reset': 'Zrušit filtry',
        'filters.active.tooltip': 'Záznamy jsou nyní filtrovány',

        'User does not exist.': 'Uživatel neexistuje.',
        'Provided credentials don\'t match.': 'Zadané údaje nesouhlasí.',
        'Cannot generate Person URI without last name.': 'Nelze vygenerovat Person URI bez příjmení.',
        'Cannot generate Person URI due to unsupported encoding.': 'Nelze vygenerovat Person URI kvůli nepodporovanému kódování.',
        'Cannot generate Person URI without first name.': 'Nelze vygenerovat Person URI bez křestního jména.',
        'The passed institution\'s key is different from the specified one.': 'Klíč instituce se neshoduje.',
        'The passed record\'s key is different from the specified one.': 'Klíč vyplněného záznamu se neshoduje.',
        'The passed user\'s current password is different from the specified one.': 'Stará hesla se neshodují.',
        'The passed user\'s username is different from the specified one.': 'Přezdívka se neshoduje.',
        'Username cannot contain special characters.': 'Přezdívka nesmí obsahovat speciální znaky',
        'Cannot encode an empty password.': 'Nelze zašifrovat prázné heslo.',
        'Unable to fetch remote data.': 'Nelze načíst vzdálená data.',
        'User with patient records cannot be deleted.': 'Uživatel s vyplněným záznamem nelze odstranit.',
        'Cannot update user URI.': 'Nelze aktualizovat uživatelské URI.',
        'The passed username already exists.': 'Zadané uživatelské jméno již existuje.',
        'User with specified username already exists.': 'Uživatel s touto přezdívkou již existuje.',
        'Cannot update user.': 'Není možné aktualizovat uživatele.',
        'Your browser is not fully supported! Some parts of web may not work properly.': 'Váš prohlížeč není plně podporován! Některé části stránek nemusí fungovat správně.',
        'We recommend using the latest version of ': 'Doporučujeme použít nejnovější verzi ',
        'or': ' nebo',
        'error.record.localNameOfRecordIsNotUnique': 'Formulářové pole \'Název/Česky\' není unikátní napříč všemi záznamy.',
        'error.record.localNameOfRecordIsEmpty': 'Formulářové pole \'Název/Česky\' je prázdne.',
        'error.institution.remove.institutionWithMembersOrPatientRecordsCannotBeDeleted': 'Instituci se zaměstnanci nebo se záznamy nelze odstranit.',
        'error.password.validation.thePassedUsersCurrentPasswordIsDifferentFromTheSpecifiedOne': "Původní heslo uživatele neodpovídá heslu uloženému."
    }
};
