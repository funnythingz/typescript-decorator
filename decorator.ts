module PATTERN {

  export interface Precure {

    getTitle(): string;

  }

  export class SweetPrecure implements Precure {

    getTitle(): string {
      return 'スイートプリキュア';
    }

  }

  export class SmilePrecure implements Precure {

    getTitle(): string {
      return 'スマイルプリキュア';
    }

  }

  export class MovieDecorator implements Precure {

    private subTitle: string = '映画';

    constructor(private precure: Precure) {}

    getTitle(): string {
      return this.subTitle + this.precure.getTitle();
    }

  }

  var sweetPrecureMovie = new MovieDecorator(new SweetPrecure());
  var smilePrecureMovie = new MovieDecorator(new SmilePrecure());

}
