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
