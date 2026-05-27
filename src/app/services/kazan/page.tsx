import Link from "next/link";

export default function KazanPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">🏛️</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">喀山大学留学咨询</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            喀山联邦大学申请全流程服务，专业规划 + 材料准备 + 签证协助
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 border border-blue-200 shadow-sm">
            <span className="text-sm text-gray-500">一口价</span>
            <span className="text-2xl font-bold text-primary">¥5,000</span>
            <span className="text-xs text-gray-400">包干一条龙</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">不含认证费 | 地接单独收费</p>
        </div>
      </section>

      {/* University Intro */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">关于喀山联邦大学</h2>
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            喀山联邦大学（Казанский федеральный университет / Kazan Federal University）
            位于俄罗斯鞑靼斯坦共和国首都喀山市，成立于<strong>1804年</strong>，
            是俄罗斯最古老的大学之一，也是俄罗斯联邦<b>10所联邦大学</b>之一。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            学校历史上曾培养出<b>列宁</b>、<b>托尔斯泰</b>等世界级人物，在数学、物理学、
            化学、语言学、医学等领域具有国际声誉。2024年 QS 世界大学排名位列
            俄罗斯前10，是<b>中国教育部认可的俄罗斯高校</b>。
          </p>
          <p className="text-gray-700 leading-relaxed">
            主校区位于喀山市区，拥有完善的教学设施和留学生宿舍。学校设有
            <b>18个学院</b>，开设超过300个本科及研究生专业，现有在校生约5万人，
            其中国际学生超过<b>9,000人</b>，中国留学生是最大的国际学生群体之一。
          </p>
        </div>
      </section>

      {/* Pre-Department */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">预科注意事项</h2>
        <div className="space-y-4">
          {[
            { title: "预科学制", desc: "1年（9月至次年6月），主要学习俄语及专业基础课程" },
            { title: "入读条件", desc: "高中毕业或同等学历，无需俄语基础，零起点教学" },
            { title: "学费参考", desc: "约 10-15 万卢布/年（约合人民币 7,000-11,000元/年），以学校当年公布为准" },
            { title: "重要提示", desc: "预科毕业通过考试后可入读本科/硕士，预科期间需注意出勤率和考试通过率" },
            { title: "申请时间", desc: "建议每年 4-7 月提交申请，8-9 月办理签证，10 月初开学" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs & Tuition */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">热门专业及学费参考</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">学院 / 专业方向</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">学位</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">学费（卢布/年）</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">约合人民币</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { dept: "经济与管理学院", degree: "本科/硕士", fee: "160,000 - 220,000", rmb: "11,600 - 15,900" },
                { dept: "法学院", degree: "本科/硕士", fee: "150,000 - 200,000", rmb: "10,900 - 14,500" },
                { dept: "信息技术与智能系统学院", degree: "本科/硕士", fee: "170,000 - 240,000", rmb: "12,300 - 17,400" },
                { dept: "语言学与跨文化交际学院", degree: "本科/硕士", fee: "140,000 - 190,000", rmb: "10,100 - 13,800" },
                { dept: "国际关系学院", degree: "本科/硕士", fee: "160,000 - 210,000", rmb: "11,600 - 15,200" },
                { dept: "石油与天然气学院", degree: "本科/硕士", fee: "180,000 - 250,000", rmb: "13,000 - 18,100" },
                { dept: "医学与基础医学学院", degree: "专家/硕士", fee: "200,000 - 300,000", rmb: "14,500 - 21,700" },
                { dept: "新闻与大众传播学院", degree: "本科/硕士", fee: "140,000 - 180,000", rmb: "10,100 - 13,000" },
              ].map((row) => (
                <tr key={row.dept} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.dept}</td>
                  <td className="px-4 py-3 text-gray-600">{row.degree}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.fee}</td>
                  <td className="px-4 py-3 text-right text-gray-500">¥{row.rmb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          * 学费为参考值，以喀山联邦大学官方公布为准。汇率按 1 CNY ≈ 13.8 RUB 估算。
        </p>
      </section>

      {/* Package */}
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">¥5,000 包干一条龙</h2>
          <p className="text-blue-100 mb-6">涵盖喀山大学留学申请全流程，不含认证费和地接</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              "院校 / 专业规划与建议",
              "申请材料准备指导",
              "学历文件翻译认证协助（另行收费）",
              "留学签证申请协助",
              "学校录取跟进与沟通",
              "行前指导与注意事项",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-cyan-300">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-sm text-blue-200 mb-6">
            * 地接服务（接机、宿舍入住、落地签办理等）单独收费
          </div>
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            立即咨询留学方案
          </Link>
        </div>
      </section>
    </div>
  );
}
