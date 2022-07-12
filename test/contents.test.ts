import { setActivePinia, createPinia } from 'pinia';
import axios from 'axios';
import { useContentsStore } from '../src/pages/contents/store/contents';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosGet = axios.get as jest.Mock;

describe('Contents Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('returns contents', async () => {
    // const contentsStore = useContentsStore();
    // const mock = jest.spyOn(axios, 'get');
    // mock.mockReturnValueOnce({  })
    // mockedAxios.get.mockReturnValueOnce({})
    // const res = await contentsStore.fetchContents('service@fooding.io');
    // expect(mockedAxios.get).toHaveBeenCalled();
    // expect().toBe()
  });

  it('gets empty data', async () => {
    // given
    // const msg = 'errrrrrrr';
    // mockedAxiosGet.mockRejectedValueOnce(new Error(msg));
    mockedAxios.get.mockResolvedValue([]);

    // when
    const contentsStore = useContentsStore();
    const result = await contentsStore.fetchContents('wrong@emailaddress.com');

    // then
    expect(mockedAxiosGet).toHaveBeenCalledWith('sales/inquiries', {
      params: {
        limit: 1,
        s: { contactEmail: 'wrong@emailaddress.com' },
        sort: 'createdAt,DESC',
      },
    });
    // @ts-ignore
    expect(result.data).toEqual([]);
  });
});
