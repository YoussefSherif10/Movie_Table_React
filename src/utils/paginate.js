/* the utils folder contains all the utility modules such as the
pagination Algorithm
 */
import _ from 'lodash'

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize; // calculate the index of the first item in page

    // we need to put the items in a lodash wrapper to be able to use methods in chain
    // slice() get items starting from index
    // take() pick specific number of items
    // value() returns an array of the picked items
    return _(items).slice(startIndex).take(pageSize).value();
}
