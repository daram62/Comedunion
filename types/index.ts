interface Project {
    id: number
    projectName: string
    students: Student[]
    videoUrl: string
    repositoryUrl: string
    description : string
    liveDemoUrl: string
    prize: boolean
    call : number
    instagramUrl : string
}

interface Student {
    id: string
    name: string
    department: string
    
}

export type { Project }
