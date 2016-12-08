import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message',
  pure: false
})
export class MessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // let replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    // replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    // replacedText = value.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    // //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    // replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    // replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    // //Change email addresses to mailto:: links.
    // replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    // replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    // return replacedText;

    if (!value) {
      return value;
    }

    let __urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    let __imgRegex = /\.(?:jpe?g|gif|png)$/i;
    let exp = __urlRegex;
    return value.replace(exp, function (match) {
      __imgRegex.lastIndex = 0;
      if (__imgRegex.test(match)) {
        return '<a href="' + match + '" target="_blank">' + match + '</a>';
      }
      else {
        return '<a href="' + match + '" target="_blank">' + match + '</a>';
      }
    });




  }
}