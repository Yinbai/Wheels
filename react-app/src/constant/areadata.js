import React from 'react';

export const areadata = [{
	value: "110000",
	label: "北京市",
	children: [{
		value: "110100",
		label: "市辖区",
		children: [{
				value: "110101",
				label: "东城区"
			},
			{
				value: "110102",
				label: "西城区"
			},
			{
				value: "110105",
				label: "朝阳区"
			},
			{
				value: "110106",
				label: "丰台区"
			},
			{
				value: "110107",
				label: "石景山区"
			},
			{
				value: "110108",
				label: "海淀区"
			},
			{
				value: "110109",
				label: "门头沟区"
			},
			{
				value: "110111",
				label: "房山区"
			},
			{
				value: "110112",
				label: "通州区"
			},
			{
				value: "110113",
				label: "顺义区"
			},
			{
				value: "110114",
				label: "昌平区"
			},
			{
				value: "110115",
				label: "大兴区"
			},
			{
				value: "110116",
				label: "怀柔区"
			},
			{
				value: "110117",
				label: "平谷区"
			},
			{
				value: "110118",
				label: "密云区"
			},
			{
				value: "110119",
				label: "延庆区"
			}
		]
	}]
}];


export const AreaContext = React.createContext(areadata);
