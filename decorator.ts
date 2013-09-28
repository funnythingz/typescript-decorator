module PATTERN {

  export interface Precure {

    getTitle();

  }

  export class SweetPrecure implements Precure {

    getTitle() {
      return 'スイートプリキュア';
    }

  }

  export class SmilePrecure implements Precure {

    getTitle() {
      return 'スマイルプリキュア';
    }

  }

  export class MovieDecorator implements Precure {

    private subTitle: string = '映画';

    constructor(private precure: Precure) {}

    getTitle() {
      return this.subTitle + this.precure.getTitle();
    }

  }

  var sweetPrecureMovie = new MovieDecorator(new SweetPrecure());
  var smilePrecureMovie = new MovieDecorator(new SmilePrecure());

}