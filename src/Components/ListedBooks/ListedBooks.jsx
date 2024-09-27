import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ReadList/ReadList';
import WishList from '../WishList/WishList';

const ListedBooks = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <ReadList></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

ListedBooks.propTypes = {

};

export default ListedBooks;