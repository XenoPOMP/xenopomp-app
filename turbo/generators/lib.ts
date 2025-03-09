import type { PlopTypes } from '@turbo/gen';

const customAction: PlopTypes.CustomActionFunction = async answers => {
  // fetch data from a remote API
  // const results = await fetchRemoteData();
  // add the response to the answers, making this data available to actions
  answers['results'] = {};
  // return a status string
  return 'Finished data fetching!';
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator('Generator name', {
    description: 'Generator description',
    prompts: [],
    actions: [customAction],
  });
}
