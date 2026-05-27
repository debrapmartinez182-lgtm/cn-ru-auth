export default function ExchangePage() {
  // Approximate rates (for display; actual rates via customer service)
  const rates = [
    { from: "人民币 CNY", to: "卢布 RUB", rate: "1 CNY ≈ 13.80 RUB", note: "买入卢布", highlight: true },
    { from: "卢布 RUB", to: "人民币 CNY", rate: "100 RUB ≈ 7.25 CNY", note: "卖出卢布" },
    { from: "美元 USD", to: "卢布 RUB", rate: "1 USD ≈ 95.50 RUB", note: "美元兑卢布" },
    { from: "卢布 RUB", to: "美元 USD", rate: "1000 RUB ≈ 10.47 USD", note: "卢布兑美元" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-4 block">💱</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">换汇服务</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            人民币 ⇄ 卢布安全快速兑换，合规渠道，最优汇率
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Live Rates Table */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">实时汇率参考</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">每日更新</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
              <div className="px-4 py-3">兑换方向</div>
              <div className="px-4 py-3 col-span-2">参考汇率</div>
              <div className="px-4 py-3 text-right">说明</div>
            </div>
            {rates.map((r, i) => (
              <div key={i} className={`grid grid-cols-4 gap-0 border-t border-gray-100 text-sm ${r.highlight ? "bg-amber-50/50" : ""}`}>
                <div className="px-4 py-4 font-medium text-gray-900">{r.from} → {r.to}</div>
                <div className={`px-4 py-4 col-span-2 font-mono font-bold ${r.highlight ? "text-amber-600" : "text-gray-700"}`}>
                  {r.rate}
                </div>
                <div className="px-4 py-4 text-right text-gray-500 text-xs">{r.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-400">
            * 参考汇率仅供参考，实际汇率请联系客服获取实时报价
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "最优汇率", desc: "实时市场汇率，远优于银行牌价，大额更优惠" },
            { title: "合规安全", desc: "持牌金融机构合作，资金流向透明可追溯" },
            { title: "当日到账", desc: "确认后快速到账，最快1小时内完成" },
            { title: "大额支持", desc: "支持企业及个人大额换汇需求，专属客户经理对接" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">获取实时汇率 · 立即换汇</h2>
          <p className="text-gray-600 mb-6">联系客服获取实时汇率报价，专业顾问一对一服务</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:400-888-9999" className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors">
              📞 联系客服
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
