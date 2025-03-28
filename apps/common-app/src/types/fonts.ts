type Slant = 'italic' | 'normal';
type Weight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'normal';

export type FontStyle = {
  fontSize: number;
  fontStyle: Slant;
  fontWeight: Weight;
  letterSpacing: number;
  lineHeight: number;
  fontFamily: string;
};

export type FontVariant =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'code'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'inlineCode'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'subHeading1'
  | 'subHeading2'
  | 'subHeading3';
