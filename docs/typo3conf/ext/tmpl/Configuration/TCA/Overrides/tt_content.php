<?php
defined('TYPO3_MODE') or die();

// Gridelements
// funktioniert nicht, weil gridelements showitem auch über overrides definieren
// damit es funktioniert, muss die Reihenfolge in PackageStates.php angepasst werden

/*
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['showitem'] =  '
        --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
        header,
        tx_gridelements_backend_layout,
        pi_flexform,
        tx_gridelements_children,

        --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
        --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
        --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
        --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories,
        --div--;LLL:EXT:gridelements/Resources/Private/Language/locallang_db.xlf:gridElements,
        tx_gridelements_container,
        tx_gridelements_columns
    ';
	*/

// Add new fields to tt_content for common use of custom CTypes
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', [

        'textfield1' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.textfield1',
            'config' => [
                'type' => 'input',
                'size' => 30,
                'eval' => 'trim',
            ],
        ],
        'image_position' => [
            'exclude' => true,
            'label' => 'LLL:EXT:test/Resources/Private/Language/locallang_db.xlf:tx_test_domain_model_item.image_position',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_position_title.I.0', 0],
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_position_title.I.1', 1],
                ],
                'size' => 1,
                'maxitems' => 1,
                'eval' => ''
            ],
        ],
        'image_width' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_width',
            'config' => [
                'type' => 'input',
                'size' => 4,
                'eval' => 'int'
            ]
        ],
        'image_height' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_height',
            'config' => [
                'type' => 'input',
                'size' => 4,
                'eval' => 'int'
            ]
        ],
        'slider_data_speed' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.slider_data_speed',
            'config' => [
                'type' => 'input',
                'size' => 4,
                'eval' => 'int'
            ]
        ],
        'slider_data_autoplay_speed' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.slider_data_autoplay_speed',
            'config' => [
                'type' => 'input',
                'size' => 4,
                'eval' => 'int'
            ]
        ],
        'column_class' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.column_class',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.column_class.I.0', 0],
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.column_class.I.1', 1],
                ],
                'size' => 1,
                'maxitems' => 1,
                'eval' => ''
            ],
        ],
        'vertical_align' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.vertical_align',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.vertical_align.I.0', 0],
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.vertical_align.I.1', 1],
                    ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.vertical_align.I.2', 2],
                ],
                'size' => 1,
                'maxitems' => 1,
                'eval' => ''
            ],
        ],
    ]
);

