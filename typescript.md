### reference
https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
https://fettblog.eu/typescript-react/components/


### codes

```
export type IconProps = {
	content: string;
	id?: string;
	viewBox: string;
	isMounted: boolean;
};
```
```
type AccordionStateProps = {
	isOpen: boolean;
};
```
```
export class Accordion extends React.Component<Props, AccordionStateProps> {
constructor(props: Props) {
		super(props);
	}
render() {
		const {
			children,
			customButtonComponent,
			isOpen: isOpenProp,
			onChange: onChangeProp,
			...restProps
		} = this.props;
return ()}

export default Accordion;
```
