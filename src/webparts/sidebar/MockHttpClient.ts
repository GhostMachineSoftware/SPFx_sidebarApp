import { ISPList } from './SidebarWebPart';

export default class MockHttpClient  {

    private static _items: ISPList[] = [{ Title: 'Mock Item 1', Id: '1' },
                                        { Title: 'Mock Item 2', Id: '2' },
                                        { Title: 'Mock Item 3', Id: '3' }];

    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}