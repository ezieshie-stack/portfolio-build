import {
  ArrowLeftRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  GitCompare,
  GitPullRequest,
  MessagesSquare,
  Recycle,
  Search,
  Settings,
  TrendingUp,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const SKILLS = [
  { label: "Requirements Elicitation", icon: <MessagesSquare size={20} /> },
  { label: "BRD & FRD Authoring", icon: <FileText size={20} /> },
  { label: "As-Is / To-Be Process Modeling", icon: <GitCompare size={20} /> },
  { label: "BPMN 2.0", icon: <Waypoints size={20} /> },
  { label: "Data Modeling", icon: <Database size={20} /> },
  { label: "Stakeholder Engagement", icon: <Users size={20} /> },
  { label: "User Acceptance Testing", icon: <ClipboardCheck size={20} /> },
  { label: "Process Improvement", icon: <TrendingUp size={20} /> },
  { label: "Root Cause Analysis", icon: <Search size={20} /> },
  { label: "SQL Analysis", icon: <Database size={20} /> },
  { label: "Gap Analysis", icon: <GitPullRequest size={20} /> },
  { label: "Solution Validation", icon: <CheckCircle2 size={20} /> },
  { label: "Standard Operating Procedures", icon: <BookOpen size={20} /> },
  { label: "Continuous Improvement", icon: <Recycle size={20} /> },
  { label: "ETL Pipeline Design", icon: <ArrowLeftRight size={20} /> },
  { label: "Workflow Automation", icon: <Workflow size={20} /> },
  { label: "Platform Administration", icon: <Settings size={20} /> },
];

export function SkillsCarousel() {
  return <Marquee items={SKILLS} title="Skills & Practice" reverse />;
}
