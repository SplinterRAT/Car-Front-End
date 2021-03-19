import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const DROP_DOWN_MAX_HEIGHT = Dimensions.get("window").height / 4;
export const GRADIENT_START = 0;
export const GRADIENT_END = 1;
export const NOT_EXISTING_ELEMENT_INDEX = -1;
export const FIRST_ELEMENT_INDEX = 0;
export const SECOND_ELEMENT_INDEX = 1;
export const THIRD_ELEMENT_INDEX = 2;
export const FOURTH_ELEMENT_INDEX = 3;
export const THIRD_FROM_END_ELEMENT_INDEX = -3;
export const LAST_INDEX_CORRECTION = 1;
export const EMPTY_COLLECTION_LENGTH = 0;
export const SINGLE_ELEMENT_COLLECTION_LENGTH = 1;
export const ZERO_OPACITY = 0;
export const HALF_OPACITY = 0.5;
export const MAX_OPACITY = 1;
export const ANIMATION_DURATION = 500;
export const SLEEP_DURATION = 700;
export const MAX_POPUP_POSITION = 0;
export const MIN_POPUP_POSITION = 1;
export const MIN_POPUP_HEIGHT = 0;
export const POPUP_HEIGHT_WITH_USER_IMAGE = 188;
export const POPUP_HEIGHT_WITHOUT_USER_IMAGE = 143;
export const JOURNEY_MORE_OPTIONS_POPUP_HEIGHT = 280;
export const MIN_JOURNEY_PAGE_POPUP_HEIGHT = 262 + getStatusBarHeight();
export const MAX_JOURNEY_PAGE_POPUP_HEIGHT = 671 + getStatusBarHeight();
export const MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT = 120;
export const MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT = 400;
export const MAX_PLATE_NUMBER_LENGTH = 10;
export const MIN_PLATE_NUMBER_LENGTH = 4;
export const INITIAL_LATITUDE = 49.843844;
export const INITIAL_LONGITUDE = 24.025581;
export const REFRESHER_TIMEOUT = 500;
export const MILISECONDS_IN_MONTH = 2629800000;
export const HIDDEN_MAP_Z_INDEX = 100;
export const SHOWN_MAP_Z_INDEX = 200;
export const HTTP_STATUS_OK = 200;