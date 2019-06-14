<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'T3Dev.Tmpl',
            'Tmpl',
            'Tmpl'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('tmpl', 'Configuration/TypoScript', 'Tmpl');

    }
);
