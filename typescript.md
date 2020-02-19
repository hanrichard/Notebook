### reference
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
- https://fettblog.eu/typescript-react/components/


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

```
interface Props {
	sharesTitle: string;
	accountNumber: number;
	investments: Investment[];
	accountUuid?: string;
}

const ShareCard: React.FunctionComponent<Props> = (props: Props) => {
	React.useEffect(() => {
		setCurrentSortFunction(() => productNameSort);
		setIsSortAsc(true);
	}, []);
	
	


const sellShareUrl = (productCode: string) => /share-trading/sell?asxCode=${productCode}&accountUuid=${props.accountUuid};

const productNameSort = (a: Investment, b: Investment) =>
		a.productName.toLowerCase() > b.productName.toLowerCase() ? 1 : -1;
		
```
```
const mapReduxStateToComponentProps = ({
	accountsState,
}: AppState): ReduxStateProps => {
	return {
		accounts: accountsState.accounts,
		loading: accountsState.isLoading,
	};
};
```
```
interface Props {
	order: ShareOrderDetails;
	brokOrderId: string;
	cancelOrder: (orderPartId: string) => void;
	downloadContract: (contractId: string) => void;
}
```
