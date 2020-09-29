import './prototype';
import moment from 'moment';
import * as lodash from 'lodash';
import shortid from 'shortid';
import { notify, swal } from './message';
import { storage, storageSync } from './storage';
import tools from './tools';

moment.locale('zh-cn');

export { notify, swal, moment, storage, storageSync, lodash, shortid, tools };
