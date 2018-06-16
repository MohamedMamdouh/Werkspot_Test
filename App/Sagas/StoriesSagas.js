import { call, put } from 'redux-saga/effects'
import StoriesActions from '../Redux/StoriesRedux'

export function * getStories (api, action) {
  const { _page } = action
  let sList = []
  const storiesList = yield call(api.getTopStories)
  if (storiesList.ok) {
    const list = storiesList.data
    sList.push(...list)
  }
  let stories = []
  let i = _page * 10 - 10
  for (i = 0; i < _page * 10; i++) {
    const response = yield call(api.getStory, sList[i])
    stories.push(response.data)
  }
  if (stories) {
    yield put(StoriesActions.storiesSuccess(stories))
  }
}
