export {} // 确保跟其他实例没有冲突
import {camelCase} from 'lodash'

//declare function camelCase (input: string): string

const res = camelCase(`hello Lodash`)