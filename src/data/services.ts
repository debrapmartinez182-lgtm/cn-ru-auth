export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  documents: DocumentType[];
}

export interface DocumentType {
  id: string;
  name: string;
  description: string;
  materials: string[];
  estimatedFee: number;
  estimatedDays: number;
  category: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "study",
    title: "留学资料认证",
    description: "学历证书、成绩单、护照、高中毕业证等留学资料的翻译及俄罗斯官方认证",
    icon: "🎓",
    documents: [
      {
        id: "diploma",
        name: "学历证书认证",
        description: "大学毕业证、学位证书的俄语翻译及俄罗斯官方认证",
        materials: ["学历证书扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "study",
      },
      {
        id: "transcript",
        name: "成绩单认证",
        description: "学校官方成绩单的俄语翻译及俄罗斯官方认证",
        materials: ["成绩单扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "study",
      },
      {
        id: "highschool-diploma",
        name: "高中毕业证认证",
        description: "高中毕业证书的俄语翻译及俄罗斯官方认证",
        materials: ["高中毕业证扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "study",
      },
      {
        id: "passport",
        name: "护照认证",
        description: "中国护照的俄语翻译及俄罗斯官方认证",
        materials: ["护照扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "study",
      },
    ],
  },
  {
    id: "legal",
    title: "法律及其他文件认证",
    description: "无犯罪记录、驾驶证、结婚证、出生证明、委托书、声明书等文件的认证",
    icon: "📋",
    documents: [
      {
        id: "no-crime",
        name: "无犯罪记录认证",
        description: "无犯罪记录证明的俄语翻译及俄罗斯官方认证",
        materials: ["无犯罪记录证明扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "driver-license",
        name: "驾驶证认证",
        description: "中国驾驶证的俄语翻译及俄罗斯官方认证，用于在俄换领驾照",
        materials: ["驾驶证扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "birth-cert",
        name: "出生证明认证",
        description: "出生医学证明的俄语翻译及俄罗斯官方认证",
        materials: ["出生证明扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "marriage-cert",
        name: "结婚证认证",
        description: "中国结婚证的俄语翻译及俄罗斯官方认证",
        materials: ["结婚证扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "single-status",
        name: "单身证明认证",
        description: "未婚证明的俄语翻译及俄罗斯官方认证",
        materials: ["单身证明扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "power-attorney",
        name: "授权委托书认证",
        description: "授权委托书的俄语翻译及俄罗斯官方认证",
        materials: ["授权委托书扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
      {
        id: "declaration",
        name: "声明书认证",
        description: "各类声明书的俄语翻译及俄罗斯官方认证",
        materials: ["声明书扫描件"],
        estimatedFee: 450,
        estimatedDays: 7,
        category: "legal",
      },
    ],
  },
  {
    id: "translation",
    title: "翻译服务",
    description: "纯翻译服务：文件俄语翻译、中俄互译、翻译件公证，不含认证",
    icon: "🌐",
    documents: [
      {
        id: "trans-standard",
        name: "标准文件翻译",
        description: "标准文件的俄语专业翻译（不含认证）",
        materials: ["文件扫描件"],
        estimatedFee: 500,
        estimatedDays: 3,
        category: "translation",
      },
      {
        id: "trans-certified",
        name: "认证翻译件",
        description: "由具有资质的翻译公司出具的带盖章翻译件",
        materials: ["文件扫描件", "用途说明"],
        estimatedFee: 800,
        estimatedDays: 5,
        category: "translation",
      },
      {
        id: "trans-urgent",
        name: "加急翻译",
        description: "24小时内完成翻译交付",
        materials: ["文件扫描件"],
        estimatedFee: 1200,
        estimatedDays: 1,
        category: "translation",
      },
    ],
  },
];

export const allDocuments: DocumentType[] = serviceCategories.flatMap(
  (cat) => cat.documents
);

export function getDocumentById(id: string): DocumentType | undefined {
  return allDocuments.find((doc) => doc.id === id);
}

export function getCategoryById(id: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.id === id);
}
