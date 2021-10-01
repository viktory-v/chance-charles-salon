/* eslint-disable no-var */
import googleFontsLoader from './google-fonts-loader';
import fontsLoader from './fonts-loader';
//import './block';
//import './blog';
import './forms';
import './header';
import './light-tabs';
//import './map';
//import './popups';
import './retina';
import './sliders';
import './smooth-scroll';
import './target-blank';
//import '../../woo/js';

googleFontsLoader( [
  "Lato:300,400,500,600,700,900",
  "Italiana:300,400,500,600,700,900"
] );

fontsLoader( 'AM+AMB', theme.url + 'fonts/fonts.css' );

jQuery( $ => {
  const $diplomas_popup = $( '.section-diplomas .popup' );
  if ( $diplomas_popup.length ) {
    const $diplomas_popup_img = $diplomas_popup.find( 'img' ).eq( 0 );
    $( '.section-diplomas .diplomas img' ).on( 'click', function( e ) {
      $diplomas_popup.addClass( 'show' );
      $diplomas_popup_img.attr( 'src', this.src );
    } );
    $diplomas_popup.on( 'click', function() {
      $diplomas_popup.removeClass( 'show' );
    } );
  }

  $( '.btn' ).on( 'click', function() {
    $( '.calendly-badge-content' ).trigger( 'click' );
  } );
} );
