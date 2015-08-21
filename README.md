# zoaui
ZoaUI, another UI library

##New in v0.1.5
* Fixed dialog positioning
* <code>@font-face</code> declarations are now in a separate file, fonts.css.

##New in v0.1.4
* Fixed support for iOS Safari
* Ghost buttons are now natively supported

##Disclaimers
* Remember to include all our files, especially, general.css before your own, so that your works would not get overridden.
* IE 8 or below would not support the responsive features, but no polyfixes would be provided here.
* We aim a modular approach here, and therefore all classnames are prefixed with <code>zo-</code> or <code>zojs-</code>, which might increase the bytes used in writing your own HTML, and please do not prefix your own classnames with zo-.
* We follow the <a href="https://css-tricks.com/bem-101/">BEM conventions</a> in all of our classnames.
* DO NOT trust the <code>/build</code> folder unless those zipped in <i>releases</i>. They may or may not reflect the most up-to-date source code.

##To be added
* i18n support&mdash;for Western and CJK languages.