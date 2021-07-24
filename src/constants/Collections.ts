const sortBy = (collection: {}[], key: string, direction : 'ASC' | 'DESC') : any[] => (collection.slice().sort((a:any, b:any) => ((direction === 'ASC' ? a[key] > b[key] : b[key] > a[key]) ? 1 : -1)));
export const OPTIONS = {
  profile: [
    {
      label: 'Name (ASC.)',
      value: 'name.first_ASC',
    },
    {
      label: 'Name (DESC.)',
      value: 'name.first_DESC',
    },
    {
      label: 'Surname (ASC.)',
      value: 'name.last_ASC',
    },
    {
      label: 'Surname (DESC.)',
      value: 'name.last_DESC',
    },
  ],
};

// ((direction === 'ASC' ? a[key] > b[key] : b[key] > a[key]) ? 1 : -1))
const sortByNestedChildProperty = (array:any[], key:string, direction : 'ASC' | 'DESC' = 'ASC') => {
  const prop: string[] = key.split('.');
  const len = prop.length;
  const arrayCopy = array.slice();
  arrayCopy.sort((a :any, b:any) => {
    let i = 0;
    while (i < len) {
      a = a[prop[i]];
      b = b[prop[i]];
      i += 1;
    }

    return ((direction === 'ASC' ? a > b : b > a) ? 1 : -1);
  });
  return arrayCopy;
};
const Collections = {
  sortBy,
  OPTIONS,
  sortByNestedChildProperty,
};

export default Collections;
