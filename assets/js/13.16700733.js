(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(t,e,a){"use strict";a.r(e);var n=a(43),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[t._v("#")]),t._v(" Annotation")]),t._v(" "),a("blockquote",[a("p",[t._v("It's about the annotations in "),a("code",[t._v("MybatisPlus")]),t._v(" (For more details, pls refer to the source code)")])]),t._v(" "),a("p",[t._v("Packages：")]),t._v(" "),a("p",[t._v("👉 "),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus/tree/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatis-plus-annotation"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tablename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablename"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableName.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableName"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for DB table name")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default val")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("DB table name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("resultMap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("resultMap id in *mapper.xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("schema")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("schema(@since 3.1.1)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("keepGlobalPrefix")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("true: keep using the tablePrefix in Global Configuration(if tablePrefix configurated in Global, will set the Global value here automatically)(@since 3.1.1)")])])])]),t._v(" "),a("h2",{attrs:{id:"tableid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tableid"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableId.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableId"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for Primary Key")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('column name of the PK, if java entity propertyName is "id", will be recognized as PK')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IdType.NONE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PK type(e.g. AUTO, UUID, ID_WORKER, INPUT)")])])])]),t._v(" "),a("h4",{attrs:{id:"idtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idtype"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/IdType.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("IdType"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Descp")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AUTO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("autoincrement by DB")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INPUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("user specify manually")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ID_WORKER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("distributed union ID, Long type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UUID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("UUID String with length of 32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NONE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nothing")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ID_WORKER_STR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String value of ID_WORKER")])])])]),t._v(" "),a("h2",{attrs:{id:"tablefield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablefield"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableField.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableField"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for column(non-PK)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("column name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("el")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Mapped to  "),a("code",[t._v("#{ ... }")]),t._v(" for native, equivalently write "),a("code",[t._v("#{ ... }")]),t._v(" in *mapper.xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("exist")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false: NOT a column, just temporary property")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("condition")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("config the expression in where condition, by default it's "),a("code",[t._v("EQUAL")]),t._v(", "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlCondition.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("reference"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('e.g. value="version", update="%s+1", when do update, \'version=version+1\' will be appended to  '),a("code",[t._v("update xx_table set xxx=xxx")]),t._v(" (this property has higher priority than "),a("code",[t._v("el")]),t._v(" )")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("insertStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("specify the strategy of this column when do insert, e.g.  NOT_NULL: "),a("code",[t._v('insert into table_a(<if test="columnProperty != null">column</if>) values (<if test="columnProperty != null">#{columnProperty}</if>)')]),t._v(" (since v_3.1.2)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("updateStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("specify the strategy of this column when do update, e.g.  IGNORED: "),a("code",[t._v("update table_a set column=#{columnProperty}")]),t._v(" (since v_3.1.2)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("whereStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("specify the strategy of this column when do query, e.g.  NOT_EMPTY: "),a("code",[t._v("where <if test=\"columnProperty != null and columnProperty!=''\">column=#{columnProperty}</if>")]),t._v(" (since v_3.1.2)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("fill")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("auto fill strategy: INSERT, UPDATE, INSERT_UPDATE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("select")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false: this column will not appear in select expression")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("keepGlobalFormat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("whether keep the Global column name format(e.g. UnderscoreToCamelCase) (@since 3.1.1)")])])])]),t._v(" "),a("h4",{attrs:{id:"fieldstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fieldstrategy"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldStrategy.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("FieldStrategy"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Descp")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IGNORED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ignored")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT_NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('<if test="columnProperty != null">column=#{columnProperty}</if>')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT_EMPTY")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<if test=\"columnProperty != null and columnProperty!=''\">(only support String column, for other types, will processed as NOT_NULL)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("keep the Global config")])])])]),t._v(" "),a("h4",{attrs:{id:"fieldfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fieldfill"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldFill.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("FieldFill"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Descp")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("bypass")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INSERT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fill the column when do insert(should specify the filled value in MetaObjectHandler)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UPDATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fill the column when do update")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INSERT_UPDATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fill the column when do both insert/update")])])])]),t._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/Version.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Version"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for Optimistic Lock, drop "),a("code",[t._v("@Verison")]),t._v(" on the version property")])]),t._v(" "),a("h2",{attrs:{id:"enumvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumvalue"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/EnumValue.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@EnumValue"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for enum property, to specify the real column value, and map to enum property")])]),t._v(" "),a("h2",{attrs:{id:"tablelogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablelogic"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableLogic.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableLogic"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation to specify the Logic delete column")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("value for non-deleted records")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("delval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("value for deleted records")])])])]),t._v(" "),a("h2",{attrs:{id:"sqlparser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlparser"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlParser.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@SqlParser"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：annotation for tenant (annotation for mapper is supported since 3.1.1)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default Val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("filter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true: bypass ISqlParser.doFilter(), otherwise sql will be parsed in ISqlParser chain and append addition conditions such as tenant_id, etc.")])])])]),t._v(" "),a("h2",{attrs:{id:"keysequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keysequence"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/KeySequence.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@KeySequence"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Description：use DB sequence as PK, such as "),a("code",[t._v("oracle")]),t._v(".sequence")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Properties")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default val")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sequence name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("clazz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Long.class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('return value type, if String.class, will return Number.toString: "1"')])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);