export const navList = [{
  id: 0,
  type: 'taxi',
  name: '出租车',
  isActive: true,
  iconUrl: 'data:image/png;base64,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'
},
{
  id: 1,
  type: 'replace',
  name: '代驾',
  isActive: false,
  iconUrl: 'data:image/png;base64,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'
},
{
  id: 2,
  type: 'bus',
  name: '公交',
  isActive: false,
  iconUrl: 'data:image/png;base64,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'
},
]
export const cityList = [{
  name: '♥',
  cityName: ['上海', '北京', '广州', '南京', '杭州', '深圳']
},
{
  name: 'A',
  cityName: ['安溪', '宿松县(安庆)', '安阳', '安顺', '安康', '安宁', '安陆', '鞍山', '文峰区(安阳)', '桐城市(安庆)', '安庆', '滑县(安阳)']
},
{
  name: 'B',
  cityName: ['无棣县(滨州)', '怀远县(蚌埠)', '保山', '北海', '蚌埠', '北京', '利辛县(亳州)', '保定', '定兴县(保定)', '泊头', '容城县(保定)', '隆阳区(保山)', '海城区(北海)', '百色', '本溪',
    '亳州', '高碑店市(保定)', '安国市(保定)', '滨州', '邹平县(滨州)', '白山', '宝鸡', '高阳县(保定)', '蒙城县(亳州)', '白城', '包头', '腾冲市(保山)', '白银', '惠民县(滨州)', '巴彦淖尔'
  ]
},
{
  name: 'C',
  cityName: ['北票市(朝阳)', '东光县(沧州)', '成都', '邛崃市(成都)', '朝阳', '都江堰(成都)', '赤壁', '明光市(滁州)', '望城区(长沙)', '浏阳市(长沙)', '长治', '澄迈县', '常熟', '桂阳县(郴州)',
    '巢湖', '定远县(滁州)', '长沙', '慈溪', '重庆', '献县(沧州)', '长春', '金坛市(常州)', '滁州', '楚雄', '简阳市(成都)', '承德', '郴州', '天长市(滁州)', '长沙', '长乐', '赤峰',
    '昌吉', '永兴县(郴州)', '沧州', '潮州', '常州', '池州', '常德'
  ]
},
{
  name: 'D',
  cityName: ['德阳', '大理', '寮步镇(东莞)', '定州', '大冶', '大兴安岭', '中江县(德阳)', '加格达奇(大兴安岭)', '大同', '东营', '东莞', '齐河县(德州)', '东兴', '利津县(东营)', '广饶县(东营)',
    '大石桥', '儋州', '德州', '东台', '达州', '大庆', '庄河市(大连)', '东方', '大连', '丹东', '都江堰', '东阳'
  ]
},
{
  name: 'E',
  cityName: ['鄂尔多斯', '鄂州', '二连浩特', '恩施']
},
{
  name: 'F',
  cityName: ['闽侯县(福州)', '丰城', '福州', '长乐市(福州)', '福清', '富阳', '临泉县(阜阳)', '太和县(阜阳)', '奉化', '佛山', '阜阳', '颍上县(阜阳)', '抚顺', '防城港', '阜南县(阜阳)',
    '东乡县(抚州)', '抚州', '阜新'
  ]
},
{
  name: 'G',
  cityName: ['共青城', '广安', '广元', '广汉', '南明区(贵阳)', '广水', '桂林', '贵阳', '赣州', '广州', '贵港',]
},
{
  name: 'H',
  cityName: ['海宁', '蕲春(黄冈)', '河池', '巨野县(菏泽)', '黄冈', '湖州', '怀化', '红安县(黄冈)', '黄石', '郓城县(菏泽)', '弥勒市(红河州)', '淮南', '淮北', '杭州', '东明县(菏泽)', '海城',
    '肥西县(合肥)', '盱眙县(淮安)', '黑河', '涟水县(淮安)', '安平县(衡水)', '常宁市(衡阳)', '庐江县(合肥)', '浠水县(黄冈)', '阳新县(黄石)', '鹤岗', '邯郸', '河津', '呼伦贝尔', '衡东县(衡阳)',
    '淮安', '菏泽', '单县(菏泽)', '合肥', '海口', '哈尔滨', '兴城市(葫芦岛)', '溆浦县(怀化)', '珲春', '汉中', '磁县(邯郸)', '老余杭区(杭州)', '呼和浩特', '葫芦岛', '惠东县(惠州)',
    '惠州', '洪湖', '鹤壁', '河源', '河间', '衡水', '泸西县(红河州)', '红河州', '武穴市(黄冈)', '黄山', '贺州', '黄骅', '海拉尔(呼伦贝尔)', '尚志市(哈尔滨)', '衡阳',
  ]
},
{
  name: 'i',
  cityName: []
},
{
  name: 'J',
  cityName: ['荆门', '监利县(荆州)', '济南', '江阴', '晋城', '吉安', '海宁市(嘉兴)', '公安县(荆州)', '松滋市(荆州)', '乐平区(景德镇)', '景洪', '酒泉', '佳木斯', '恩平市(江门)', '揭阳',
    '建德', '凌海市(锦州)', '嘉兴', '金乡县(济宁)', '曲阜市(济宁)', '吉林', '荆州', '锦州', '汶上县(济宁)', '济源', '胶州', '青阳镇(江阴)', '嘉峪关', '九江', '景德镇', '即墨',
    '微山县(济宁)', '焦作', '晋中', '句容', '江山', '江油', '普宁(揭阳)', '武义县(金华)', '江门', '石首市(荆州)', '金昌', '嘉祥县(济宁)', '吉州区(吉安)', '瑞昌(九江)', '晋江',
    '高平市(晋城)', '敦煌市(酒泉)', '靖江', '吉首', '金华', '济宁', '鸡西', '京山县(荆门)',
  ]
},
{
  name: 'K',
  cityName: ['莒南县(临沂)', '乐山', '浏阳(浏阳)', '临沧', '莱州', '洪洞县(临汾)', '霸州(廊坊)', '连云港', '娄底', '丽水', '兰溪', '六安', '灌南县(连云港)', '东海县(连云港)', '陵水',
    '莱芜', '固安县(廊坊)', '漯河', '来宾', '兰州', '罗庄区(临沂)', '临汾', '利川', '沂水县(临沂)', '洛阳', '侯马市(临汾)', '三河燕郊(廊坊)', '浏阳', '峨眉山市(乐山)', '溧阳',
    '丽江', '柳林县(吕梁)', '文安县(廊坊)', '冷水江市(娄底)', '泸州', '龙岩', '耒阳', '东阿县(聊城)', '临海', '聊城', '柳州', '舒城县(六安)', '临沂', '廊坊', '辽源', '吕梁',
    '辽阳', '新化县(娄底)', '龙泉市(丽水)', '姜漪区(六安)', '临安',
  ]
},
{
  name: 'L',
  cityName: ['莒南县(临沂)', '乐山', '浏阳(浏阳)', '临沧', '莱州', '洪洞县(临汾)', '霸州(廊坊)', '连云港', '娄底', '丽水', '兰溪', '六安', '灌南县(连云港)', '东海县(连云港)', '陵水',
    '莱芜', '固安县(廊坊)', '漯河', '来宾', '兰州', '罗庄区(临沂)', '临汾', '利川', '沂水县(临沂)', '洛阳', '侯马市(临汾)', '三河燕郊(廊坊)', '浏阳', '峨眉山市(乐山)', '溧阳',
    '丽江', '柳林县(吕梁)', '文安县(廊坊)', '冷水江市(娄底)', '泸州', '龙岩', '耒阳', '东阿县(聊城)', '临海', '聊城', '柳州', '舒城县(六安)', '临沂', '廊坊', '辽源', '吕梁',
    '辽阳', '新化县(娄底)', '龙泉市(丽水)', '姜漪区(六安)', '临安',
  ]
},
{
  name: 'M',
  cityName: ['当涂县(马鞍山)', '梅河口', '兴宁市(梅州)', '绵阳', '眉山', '芒市', '麻城', '梅州', '信宜市(茂名)', '蒙自', '牡丹江', '茂名', '马鞍山',]
},
{
  name: 'N',
  cityName: ['宁德', '南昌', '南充', '南京', '南通', '南平', '南宁', '进贤县(南昌)', '南阳', '海门市(南通)', '内江', '宁波', '如东县(南通)', '红谷滩(南昌)',]
},
{
  name: 'P',
  cityName: ['彭州', '萍乡', '攀枝花', '平凉', '平湖', '汝州市(平顶山)', '平顶山', '安源区(萍乡)', '盘锦', '莆田', '濮阳', '普洱',]
},
{
  name: 'Q',
  cityName: ['平度(青岛)', '琼海', '启东', '钦州', '北戴河(秦皇岛)', '昌黎县(秦皇岛)', '青岛', '惠安县(泉州)', '南安市(泉州)', '齐齐哈尔', '秦皇岛', '衢州', '钦北区(钦州)', '青州', '德化县(泉州)',
    '晋江市(泉州)', '清远', '泉州', '七台河', '山海关区(秦皇岛)', '曲靖', '永春县(泉州)', '潜江', '庆阳',
  ]
},
{
  name: 'R',
  cityName: ['日照', '五莲县(日照)', '荣成', '石岛(荣成)', '瑞安', '任丘', '如皋',]
},
{
  name: 'S',
  cityName: ['上虞', '石家庄', '汕头', '双鸭山', '商洛', '苏州', '邵阳', '绍兴', '上海', '邵阳', '晋州市(石家庄)', '埇桥区(宿州)', '石河子', '三明', '三门峡', '寿光', '洞口县(邵阳)',
    '汕尾', '玉山县(上饶)', '上饶', '遂宁', '泗洪县(宿迁)', '朔州', '万年县(上饶)', '随州', '龙华新区(深圳)', '三亚', '绥化', '韶关', '泗阳县(宿迁)', '新乐市(石家庄)', '邵东县(邵阳)',
    '宿迁', '深圳', '松原', '怀仁县(朔州)', '沈阳', '商丘', '宿州', '沭阳县(宿迁)', '石狮', '石嘴山', '平山县(石家庄)', '永城市(商丘)'
  ]
},
{
  name: 'T',
  cityName: ['台山', '通化', '铜川', '天水', '新泰市(泰安)', '泰州', '泰兴(泰州)', '铜陵', '铁岭', '迁安市(唐山)', '昌图县(铁岭)', '天台', '天津', '台州', '肥城市(泰安)', '滦南县(唐山)',
    '三河(天津)', '桐乡', '太仓', '太原', '唐山', '天门', '通辽', '泰安', '滨海新区(天津)'
  ]
},
{
  name: 'W',
  cityName: ['乳山市(威海)', '武威', '温岭', '文登(威海)', '昌邑市(潍坊)', '文昌', '渭南', '乌鲁木齐', '无为县(芜湖)', '无锡', '武安', '乌兰浩特', '梧州', '乌兰察布', '吴江', '高密市(潍坊)',
    '文山', '威海', '乌海', '诸城市(潍坊)', '荣成市(威海)', '万宁', '潍坊', '泰顺县(温州)', '芜湖', '温州', '蒲城县(渭南)', '韩城市(渭南)', '永嘉县(温州)', '武汉', '南陵县(芜湖)',
    '澄城县(渭南)',
  ]
},
{
  name: 'X',
  cityName: ['汉川(孝感)', '云梦县(孝感)', '大悟县(孝感)', '孝昌县(孝感)', '宁晋县(邢台)', '仙桃', '谷城县(襄阳)', '襄阳', '广德县(宣城)', '固始县(信阳)', '新余', '新乡', '厦门', '丰县(徐州)',
    '湘潭', '沙河市(邢台)', '孝义', '孝感', '西昌', '兴平', '锡林郭勒', '兴化', '原平市(忻州)', '渝水区(新余)', '许昌', '信阳', '邢台', '潢川县(信阳)', '光山县(信阳)', '湘潭',
    '禹州市(许昌)', '睢宁县(徐州)', '徐州', '沛县(徐州)', '西宁', '锡林浩特市(锡林郭勒)', '湘乡', '宣城', '分宜县(新余)', '咸宁', '长垣县(新乡)', '萧山', '新沂市(徐州)', '辉县市(新乡)',
    '忻州', '宁国市(宣城)', '咸阳', '襄樊(襄阳)', '宜城市(襄阳)', '西安',
  ]
},
{
  name: 'Y',
  cityName: ['银川', '仪征市(扬州)', '榆林', '宜都', '延吉', '伊宁市(伊犁)', '宜兴', '建湖县(盐城)', '宜春', '蓬莱市(烟台)', '烟台', '宜宾', '高邮市(扬州)', '高安市(宜春)', '宝应县(扬州)',
    '永济市(运城)', '乐清', '伊春', '运城', '永安', '永康', '余姚', '玉环', '益阳', '阳江', '鹰潭', '海阳市(烟台)', '玉溪', '扬州', '岳阳', '延安', '盐城', '绥德县(榆林)',
    '龙口市(烟台)', '永州', '玉林', '扬中', '益阳', '应城', '云浮', '宜昌', '伊犁', '莱阳市(烟台)', '沅江', '营口', '华容县(岳阳)', '阳泉', '赫山区(益阳)', '岳阳', '枝江(宜昌)',
    '阜宁县(盐城)', '滨海县(盐城)', '义乌', '响水县(盐城)', '临湘市(岳阳)',
  ]
},
{
  name: 'Z',
  cityName: ['张家口', '诸暨', '张家港', '漳浦县(漳州)', '平舆县(驻马店)', '龙海市(漳州)', '湛江', '珠海', '镇江', '滕州市(枣庄)', '醴陵市(株洲)', '仁怀市(遵义)', '舟山', '岱山县(舟山)',
    '郑州', '中牟县(郑州)', '株洲', '新郑市(郑州)', '中山', '淄博', '金港镇(张家港)', '肇庆', '自贡', '遵化', '涿州', '永定区(张家界)', '株洲', '驻马店', '招远', '枣庄', '张家界',
    '昭通', '周口', '遵义', '章丘', '漳州', '樟树', '枣阳', '张掖', '资阳', '邹城',
  ]
}
]